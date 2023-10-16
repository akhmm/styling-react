import React from "react"
import styled from "styled-components"

const CardContainer = styled.div`
    border-radius : 10px;
    background-color: #F8F0E5;
    width: 400px;    
`
const Image = styled.img`
    border-radius : 10px 10px 0px 0px;
    width: 100%;
`
const TextContainer = styled.div`
    padding: 10px 20px;

`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    `

const CardTitle = styled.h2`
    font-size: 20px;
    color : #102C57;
    margin-top: 0px;
`
const Price = styled.h5`
    font-size: 14px;
    display: flex;
    justify-content: center;
    font-weight: normal;
    margin-top: 0px;
`


const Description = styled.p`
    color: black;
    font-size: 10px;
    text-align: left;
`
const Cancel = styled.p`
    font-size: 14px;
`
const Star = styled.p`
    font-size: 14px;

`

const Card = () =>{
    return(
        <CardContainer>
            <Image src="https://fastly.picsum.photos/id/901/600/300.jpg?hmac=fhQNtgSIgB5G0yj-cIScxzSLuXy0TVhtmQPswKWZVSc" alt="random photo" />
            <TextContainer>
                <Container>
                    <CardTitle>
                        Northern Lights Tour
                    </CardTitle>
                    <Price>
                        From €50
                    </Price>
                </Container>
            <Description>
                Experience the mysterious Northern Lights tour in Iceland with their ghostly dance in the winter night sky and learn about the science behind the magic!
            </Description>
            
            <Container>
                <Cancel>
                    ✅Easy Cancellation
                </Cancel>
                <Star>
                    ⭐️⭐️⭐️
                </Star>
            </Container>
            </TextContainer>
            

        </CardContainer>
    )
}



export default Card