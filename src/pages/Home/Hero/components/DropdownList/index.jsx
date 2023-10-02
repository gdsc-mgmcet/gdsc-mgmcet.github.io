import { ReactComponent as IcGithub } from '../../../../../assets/images/icons/github.svg';
import { ReactComponent as IcInstagram } from '../../../../../assets/images/icons/instagram.svg';
import { ReactComponent as IcLinkedIn } from '../../../../../assets/images/icons/linkedin.svg';
import { ReactComponent as IcDiscord } from '../../../../../assets/images/icons/discord.svg';
import { forwardRef } from 'react';
import styled from 'styled-components';

import DropdownMenu from '../DropdownMenu';
import { GithubGDSCMGMCET, InstagramGDSCMGMCET, LinkedInGDSCMGMCET } from '../../../../../constants/constants';

function DropdownList() {
  return (
    <Container>
      <Menus>
        <DropdownMenu
          Icon={<LinkedIn />}
          description={'LinkedIn'}
          href={LinkedInGDSCMGMCET}
        />
        <DropdownMenu
          Icon={<Github />}
          description={'Github'}
          href={GithubGDSCMGMCET}
        />
        <DropdownMenu
          Icon={<Discord />}
          description={'Discord'}
          href={InstagramGDSCMGMCET}
        />
        <DropdownMenu
          Icon={<Instagram />}
          description={'Instagram'}
          href={InstagramGDSCMGMCET}
        />
      </Menus>
    </Container>
  );
}

export default forwardRef(DropdownList);

const Container = styled.div`
  width: 280px;
  max-height: 350px;
  
  padding: 5px 5px;
  
  position: absolute;
  top: 70px;
  right: 20px;
  z-index: 3000;
  border-radius: 10px;
  
  background-color: ${(props) => props.theme.color.offwhite};
  
  font-family: 'Roboto';
  
  ${({ theme }) => theme.mobile`
  right: 10px;
  `}
  `;
  
  const Menus = styled.ul`
  width: 100%;
  height: 100%;
  padding: 5px;
  padding-left: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  z-index: 5000;
`;

const LinkedIn = styled(IcLinkedIn)`
  width: 36px;
  height: 36px;
`;

const Github = styled(IcGithub)`
  width: 36px;
  height: 36px;
`;

const Discord = styled(IcDiscord)`
  width: 36px;
  height: 36px;
`;

const Instagram = styled(IcInstagram)`
  width: 36px;
  height: 36px;
`;