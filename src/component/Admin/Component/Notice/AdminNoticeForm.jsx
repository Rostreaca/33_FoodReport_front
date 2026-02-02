import { useEffect, useState } from "react";
import { ChevronRight, Bell, ImageIcon, X } from "lucide-react";
import { useNavigate, useParams, useLocation } from "react-router-dom"; // useLocation 추가
import { authInstance } from "../../../api/reqService.js";
import Toast from "../../../common/Toast/Toast.jsx";
import {
  Container,
  Breadcrumb,
  FormTitle,
  FormGroup,
  Label,
  Input,
  EditorContainer,
  Toolbar,
  ToolbarButton,
  TextArea,
  ImageSection,
  ImageGrid,
  ImageWrapper,
  RemoveImageButton,
  UploadPlaceholder,
  ButtonGroup,
  SubmitButton,
  CancelButton,
} from "./AdminNoticeForm.style.js";

const AdminNoticeForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  const navi = useNavigate();
  const { noticeNo } = useParams();
  const location = useLocation();
  const isEditMode = !!noticeNo;

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "error",
  });

  // 수정 모드일 때 전달받은 데이터로 초기화
  useEffect(() => {
    if (isEditMode && location.state?.notice) {
      const noticeData = location.state.notice;
      setTitle(noticeData.noticeTitle || "");
      setContent(noticeData.noticeContent || "");

      // 기존 이미지가 있다면 미리보기 설정
      if (noticeData.noticeImageUrl) {
        setPreview(noticeData.noticeImageUrl);
      }
    }
  }, [isEditMode, location.state]);

  const handleImage = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const previewURL = URL.createObjectURL(selectedFile);
      setPreview(previewURL);
      setFile(selectedFile);
    }
  };

  const showToast = (message, type = "error") => {
    setToast({ show: true, message, type });
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setFile(null);
  };

  const handlePostSubmit = async () => {
    if (!title.trim()) {
      showToast("공지사항 제목을 입력해주세요!", "error");
      return;
    }

    if (!content.trim()) {
      showToast("공지사항 내용을 입력해주세요.", "error");
      return;
    }

    const formData = new FormData();
    formData.append("noticeTitle", title);
    formData.append("noticeContent", content);

    if (file) {
      formData.append("file", file);
    }

    try {
      let res;
      if (isEditMode) {
        // 수정 모드
        res = await authInstance.put(
          `/api/admin/notices/${noticeNo}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
      } else {
        // 등록 모드
        res = await authInstance.post(`/api/admin/notices`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      if (res.status === 200 || res.status === 201) {
        showToast(
          isEditMode
            ? "공지사항이 수정되었습니다."
            : "공지사항이 등록되었습니다.",
          "success",
        );
        setTimeout(() => {
          navi("/admin/notices");
        }, 1000);
      }
    } catch (err) {
      console.error(err);
      navi("/errorPage", {
        state: {
          code: err.status,
          message: isEditMode
            ? "공지사항 수정에 실패하였습니다."
            : "공지사항 등록에 실패하였습니다.",
        },
      });
    }
  };

  return (
    <Container>
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={3000}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
      <Breadcrumb>
        <div className="link-item">
          <Bell size={14} />
        </div>
        <ChevronRight size={12} />
        <span>{isEditMode ? "공지사항 수정" : "공지사항 등록"}</span>
      </Breadcrumb>

      <FormTitle>{isEditMode ? "공지사항 수정" : "공지사항 등록"}</FormTitle>

      <FormGroup>
        <Label>제목</Label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="공지사항 제목을 입력해주세요."
        />
      </FormGroup>

      <FormGroup>
        <Label>내용</Label>
        <EditorContainer>
          <Toolbar>
            <ToolbarButton as="label">
              <ImageIcon size={18} />
              <input
                type="file"
                hidden
                onChange={handleImage}
                accept="image/*"
              />
            </ToolbarButton>
          </Toolbar>
          <TextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="공지사항에 대한 내용을 입력해주세요."
          />
        </EditorContainer>
      </FormGroup>

      <ImageSection>
        <Label style={{ textAlign: "center", marginBottom: "20px" }}>
          이미지 미리보기
        </Label>
        <ImageGrid>
          {preview ? (
            <ImageWrapper>
              <img src={preview} alt="preview" />
              <RemoveImageButton onClick={handleRemoveImage}>
                <X size={14} />
              </RemoveImageButton>
            </ImageWrapper>
          ) : (
            <UploadPlaceholder as="label">
              <input
                type="file"
                hidden
                onChange={handleImage}
                accept="image/*"
              />
              <ImageIcon size={24} />
              <span>사진 추가</span>
            </UploadPlaceholder>
          )}
        </ImageGrid>
      </ImageSection>

      <ButtonGroup>
        <SubmitButton onClick={handlePostSubmit}>
          {isEditMode ? "수정 완료" : "등록 완료"}
        </SubmitButton>
        <CancelButton onClick={() => navi(-1)}>취소</CancelButton>
      </ButtonGroup>
    </Container>
  );
};

export default AdminNoticeForm;
