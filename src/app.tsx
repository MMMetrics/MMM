import { styled } from 'styled-components';
import './app.css';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: #171719;
  font-family: 'Pretendard', sans-serif;
  padding: 40px 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 139px;
  line-height: 139px;
  color: transparent;
`;

const MMM = styled.span`
  font-weight: 900;
  color: #ffffff;
`;

const Etrics = styled.span`
  font-weight: 700; 
  color: #d1d5db;
`;

const Description = styled.p`
  font-size: 45px;
  font-weight: 500;
  color: #ffffff;
  margin: 20px 0 40px 0;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const VideoCard = styled.div`
  background-color: #1f1f1f;
  border-radius: 12px;
  overflow: hidden;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const VideoThumbnail = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const VideoTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 12px 0 8px 0;
`;

const VideoHashtags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
`;

const Hashtag = styled.span`
  font-size: 14px;
  color: #d1d5db;
  background-color: #2a2a2a;
  padding: 4px 8px;
  border-radius: 4px;
`;

const VideoStats = styled.div`
  display: flex;
  gap: 12px;
  font-size: 14px;
  color: #d1d5db;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export function App() {
  const tiktokVideos = [
    {
      title: "큐티스트릿",
      hashtags: ["#kawaii", "#parutan", "#CutieStreet"],
      heartCount: 12345,
      commentsCount: 123,
      viewsCount: 1234567,
      category: "Kawaii",
      urlList: ["https://google.com/"],
    },
    {
      title: "큐티스트릿",
      hashtags: ["#kawaii", "#parutan", "#CutieStreet"],
      heartCount: 12345,
      commentsCount: 123,
      viewsCount: 1234567,
      category: "Kawaii",
      urlList: ["https://google.com/"],
    },
    {
      title: "큐티스트릿",
      hashtags: ["#kawaii", "#parutan", "#CutieStreet"],
      heartCount: 12345,
      commentsCount: 123,
      viewsCount: 1234567,
      category: "Kawaii",
      urlList: ["https://google.com/"],
    },
  ];

  return (
    <Body>
      <Title>
        <MMM>MMM</MMM>
        <Etrics>etrics.</Etrics>
      </Title>

      <Description>
        다양한 밈 정보를 한 눈에 확인하세요!
      </Description>

      <VideoGrid>
        {tiktokVideos.map((video, index) => (
          <VideoCard key={index}>
            <VideoThumbnail src={video.urlList[0]} alt={video.title} />
            <VideoTitle>{video.title}</VideoTitle>
            <VideoHashtags>
              {video.hashtags.map((tag, i) => (
                <Hashtag key={i}>{tag}</Hashtag>
              ))}
            </VideoHashtags>
            <VideoStats>
              <StatItem>H {video.heartCount}</StatItem>
              <StatItem>C {video.commentsCount}</StatItem>
              <StatItem>V {video.viewsCount}</StatItem>
            </VideoStats>
          </VideoCard>
        ))}
      </VideoGrid>
    </Body>
  );
}