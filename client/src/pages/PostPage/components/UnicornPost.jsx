import { GiUnicorn } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import tw, { styled } from 'twin.macro';
import useRequireAuth from '../../../hooks/useRequireAuth';

const UnicornPost = ({ unicorns, isUnicorned, handleReaction }) => {
  const { isAuthed, handleAuth } = useRequireAuth(false);

  const action = isUnicorned ? 'removeUnicorn' : 'unicorn';
  const effect = isUnicorned ? 'negative' : 'positive';

  const handleClick = () => {
    if (isAuthed) handleReaction(action, effect, unicorns, 'isUnicorned');
    else handleAuth();
  };

  return (
    <ReactionContainer>
      <UnicornIcon isUnicorned={isUnicorned} onClick={handleClick}>
        <GiUnicorn />
      </UnicornIcon>
      <TotalReactions>{unicorns && unicorns.length}</TotalReactions>
    </ReactionContainer>
  );
};
export const ReactionContainer = tw.div`text-center flex items-center flex-col mb-md mob:(mb-sm flex items-center)`;
export const ReactionIcon = tw.div`p-2 cursor-pointer rounded-full`;
export const TotalReactions = tw.p`text-center text-dark-gray`;
const UnicornIcon = styled(ReactionIcon)`
  ${({ isUnicorned }) =>
    isUnicorned
      ? tw`bg-unicorn-bg text-unicorn-text border-8 border-solid border-unicorn-bg`
      : tw`hover:(bg-unicorn-bg text-unicorn-text)`}
`;

export default UnicornPost;