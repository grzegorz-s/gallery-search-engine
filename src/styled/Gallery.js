import styled from 'styled-components';

export const GalleriesHld = styled.div`
  width: calc(100% - 250px - 50px);
  padding: 25px;
  border-radius: 4px;
  background: rgba(0, 0, 0, .6);
`;

export const GalleryBlock = styled.div`
  margin-bottom: 30px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const GalleryTitle = styled.h3`
  margin: 0;
  color: #FFFFFF;
  font-size: 28px;
  line-height: 1.2;
`;

export const ImagesHld = styled.figure`
  display: flex;
  position: relative;
  margin: 0;
  height: 227px;
  border-radius: 4px;
  overflow-x: auto;
`;
export const Image = styled.img`
  width: 25%;
  object-fit: cover;
`;