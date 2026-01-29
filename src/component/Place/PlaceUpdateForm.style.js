import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, sans-serif;
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #666;
  margin-bottom: 20px;

  .link-item {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: #ff6b35;
    }
  }
`;

export const FormTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const FormGroup = styled.div`
  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 14px;
  outline-color: #f97316;
`;

export const EditorContainer = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  .divider { width: 1px; height: 18px; background: #e5e7eb; }
`;

export const ToolbarButton = styled.div`
  cursor: pointer;
  color: #6b7280;
  display: flex;
  align-items: center;
  &:hover { color: #f97316; }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 16px;
  border: none;
  resize: none;
  outline: none;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.6;
`;

export const ImageSection = styled.div`
  margin: 40px 0;
`;

export const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eee;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

export const RemoveImageButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover { background: #f97316; }
`;

export const UploadPlaceholder = styled.div`
  width: 180px;
  height: 140px;
  border: 2px dashed #e5e7eb;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  cursor: pointer;
  transition: all 0.2s;
  span { font-size: 12px; margin-top: 4px; }
  &:hover { 
    background: #fff7ed; 
    border-color: #f97316;
    color: #f97316;
  }
`;

export const TagSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;

export const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export const Tag = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  border: 1px solid ${props => props.$active ? '#f97316' : '#e5e7eb'};
  background: ${props => props.$active ? '#fff7ed' : '#fff'};
  color: ${props => props.$active ? '#f97316' : '#6b7280'};
  cursor: pointer;
  transition: all 0.2s;
  &:hover { 
    border-color: #f97316; 
    color: #f97316; 
    background: #fff7ed;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const SubmitButton = styled.button`
  padding: 12px 48px;
  background: #f97316;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #ea580c; }
`;

export const CancelButton = styled.button`
  padding: 12px 48px;
  background: #fff;
  color: #6b7280;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover { background: #f9fafb; border-color: #d1d5db; }
`;