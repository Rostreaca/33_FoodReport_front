import { useEffect, useState } from "react";
import { ChevronRight, Bell, ImageIcon, X } from "lucide-react";
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
} from "./AdminNoticeForm.style.js"; // 또는 실제 스타일 파일 경로
import { useNavigate, useParams } from "react-router-dom";
import { authInstance } from "../../../api/reqService.js";
import Toast from "../../../common/Toast/Toast.jsx";

const AdminNoticeForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const navi = useNavigate();
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "error",
  });
  const { noticeNo } = useParams(); // URL에서 noticeNo 가져오기
  const isEditMode = !!noticeNo; // noticeNo가 있으면 수정 모드

  const handleImage = (e) => {
    const selectedFile = e.target.files[0];

    console.log(selectedFile);
    if (selectedFile) {
      const previewURL = URL.createObjectURL(selectedFile);
      setPreview(previewURL);
      setFile(selectedFile);
    }
  };

  const showToast = (message, type = "error") => {
    // 알럿 대신 토스트
    setToast({ show: true, message, type });
  };

  const handleRemoveImage = (e) => {
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
    authInstance
      .post(`/api/admin/notices`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          navi("/admin/notices");
        }
      })
      .catch((err) => {
        console.log(err);
        navi("/errorPage", {
          state: {
            code: err.status,
            message: "공지사항등록에 실패하였습니다.",
          },
        });
      });
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
        <div className="link-item" onClick={handleImage}>
          <Bell size={14} />
        </div>
        <ChevronRight size={12} />
        <span>공지사항 등록</span>
      </Breadcrumb>

      <FormTitle>공지사항 등록</FormTitle>

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
          {preview ? ( // map 대신 조건부 렌더링
            <ImageWrapper>
              <img src={preview} alt="preview" />
              <RemoveImageButton onClick={handleRemoveImage}>
                <X size={14} />
              </RemoveImageButton>
            </ImageWrapper>
          ) : (
            <UploadPlaceholder as="label">
              <input type="file" hidden onChange={handleImage} />
              <ImageIcon size={24} />
              <span>사진 추가</span>
            </UploadPlaceholder>
          )}
        </ImageGrid>
      </ImageSection>

      <ButtonGroup>
        <SubmitButton onClick={handlePostSubmit}>등록 완료</SubmitButton>
        <CancelButton onClick={() => navi(-1)}>취소</CancelButton>
      </ButtonGroup>
    </Container>
  );
};

export default AdminNoticeForm;
