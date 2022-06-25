import tw, { styled } from 'twin.macro';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineModeComment } from 'react-icons/md';
import Tags from '../../../common/Tags';
import { useNavigate } from 'react-router-dom';

const Post = ({ isFirstPost }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      {isFirstPost && (
        <Image
          onClick={() => navigate('post/:username:titleUrl:postId')}
          src='../../../assets/images/Screenshot_2021-02-21-20-01-06-24.jpg'
        />
      )}
      <Content>
        <Header onClick={() => navigate('users/:username')}>
          <Author src='../../../assets/images/Screenshot_2021-02-21-20-01-06-24.jpg' />
          <AuthorMeta>
            <AuthorName>Ben Halpern</AuthorName>
            <CreatedAt>Jun 13</CreatedAt>
          </AuthorMeta>
        </Header>
        <Title onClick={() => navigate('post/:username:titleUrl:postId')}>Meme Monday!</Title>
        <Tags />
        <Footer>
          <Reactions>
            <SumOfReactions onClick={() => navigate('post/:username:titleUrl:postId')}>
              <HeartIcon>
                <AiOutlineHeart />
              </HeartIcon>
              <Total>32 reactions</Total>
            </SumOfReactions>
            <SumOfComments onClick={() => navigate('post/:username:titleUrl:postId/#comments')}>
              <CommentIcon>
                <MdOutlineModeComment />
              </CommentIcon>
              <Total>67 comments</Total>
            </SumOfComments>
          </Reactions>
          <Other>
            <MinutesRead>1 min read</MinutesRead>
            <SaveButton>Save</SaveButton>
          </Other>
        </Footer>
      </Content>
    </Wrapper>
  );
};
//Todo OnSave if not authed onClick={() => setShowModal(true)}
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 450px;
  cursor: pointer;
`;
const Content = tw.div`px-sm py-md`;
const Header = tw.div`flex justify-between items-center w-max gap-sm mb-2 `;
const Author = tw.img`w-10 rounded-full cursor-pointer`;
const AuthorMeta = tw.div``;
const AuthorName = tw.h4`text-darker-gray pr-1 pt-1 rounded-md hover:bg-lighter-gray cursor-pointer`;
const CreatedAt = tw.p`text-darker-gray`;
const Title = tw.h1`mb-2 hover:text-blue cursor-pointer`;
const Footer = tw.div`flex justify-between items-center`;
const Reactions = tw.div`flex justify-between items-center gap-md`;
const SumOfReactions = tw.div`flex justify-between items-center gap-2 text-darker-gray rounded-md px-2 py-1 hover:bg-lighter-gray cursor-pointer`;
const HeartIcon = styled.div`
  svg {
    font-size: 1.5rem;
  }
`;
const SumOfComments = tw.div`flex justify-between items-center gap-2 text-darker-gray rounded-md px-2 py-1 hover:bg-lighter-gray cursor-pointer`;
const CommentIcon = styled.div`
  svg {
    font-size: 1.5rem;
  }
`;
const Total = tw.p``;
const Other = tw.div`flex justify-between items-center gap-2`;
const MinutesRead = tw.p`text-darker-gray`;
const SaveButton = tw.button`px-2 py-1 bg-light-gray hover:bg-gray rounded-md`;
const Wrapper = tw.div`rounded-md w-full overflow-hidden bg-white mb-2`;

export default Post;
