import styled from "@emotion/styled"
import { mobile } from "../responsive"


const Container = styled.div`
padding-top: 10px;
  height: 30px;
  background-color: teal;
  color: white;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  ${mobile({fontSize: '12px', height: '35px'})}
`

const Announcement = () => {
  return (
    <Container>
      Get the best offers right now!! 50% OFF ON ALL ELECTRONIC GOODS~~~!!!!
      </Container>
  )
}

export default Announcement