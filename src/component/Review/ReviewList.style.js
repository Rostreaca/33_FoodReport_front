import styled from "styled-components";

export const Icon = styled.img`
  width: ${(props) => props.$size || 16}px;
  height: ${(props) => props.$size || 16}px;
  object-fit: contain;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: #fff;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
  color: #1a1a1a;
`;

export const CategorySection = styled.div`
  margin-bottom: 48px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const Tag = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${(props) => (props.$active ? "#f97316" : "#e5e7eb")};
  background: ${(props) => (props.$active ? "#fff7ed" : "#fff")};
  color: ${(props) => (props.$active ? "#f97316" : "#6b7280")};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #f97316;
    color: #f97316;
  }
`;

export const ReviewSection = styled.div``;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const SortDropdownContainer = styled.div`
  position: relative;
`;

export const SortDropdown = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  color: #374151;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #f9fafb;
  }
`;

export const SortDropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 100%;
  display: ${(props) => (props.$open ? "block" : "none")};
`;

export const SortOption = styled.button`
  display: block;
  width: 100%;
  padding: 10px 16px;
  border: none;
  background: ${(props) => (props.$active ? "#f9fafb" : "#fff")};
  color: #374151;
  font-size: 14px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: #f9fafb;
  }

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const WriteButton = styled.button`
  padding: 10px 24px;
  background: #f97316;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #ea580c;
  }
`;

export const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ReviewCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

export const CardImageArea = styled.div`
  position: relative;
  height: 180px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardCategory = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  background: #fff;
  border-radius: 4px;
  font-size: 12px;
  color: #6b7280;
`;

export const CardContent = styled.div`
  padding: 20px;
  background: #fff;
`;

export const CardTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: #9ca3af;
`;

export const StatItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #9ca3af;
  margin: 0 0 16px 0;
  line-height: 1.5;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #374151;
`;

export const AuthorAvatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ReadMoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  color: #374151;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #f9fafb;
  }
`;

export const LeftSpacer = styled.div`
  flex: 1;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  width: 240px;

  input {
    border: none;
    outline: none;
    font-size: 14px;
    color: #374151;
    width: 100%;

    &::placeholder {
      color: #9ca3af;
    }
  }
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover svg {
    stroke: #374151;
  }
`;