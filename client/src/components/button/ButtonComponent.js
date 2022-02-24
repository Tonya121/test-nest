import React from 'react';
import { Wrapper, Section, CardBlock, Content, Title, Img, ImgWrap } from './styles';

const ButtonComponent = (selectedOption) => {
    return (
      <Wrapper>
        <Section>
          {selectedOption?.map((room, index) => (
            <CardBlock 
              to={`/`} 
              key={index} 
              room={room}
            >
              <ImgWrap>
                <Img style={{ background: `url(${room?.imageUrl})no-repeat center/cover` }} />
              </ImgWrap> 
              <Title>{room?.label}</Title>
              <Content>{room?.description}</Content>
            </CardBlock>
          ))} 
        </Section>
        {/* {isError && <Text>Error!!!</Text>} */}
      </Wrapper>
    );
};

export default ButtonComponent;