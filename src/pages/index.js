import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard 
          date="2020-08-13"
          title="Daibuster Gaming Blog 〜諸行無常〜"
          excerpt="ビクロイを取りたいDaibusterが、頑張って練習する様子を、GatsbyJS製ブログで発信するブログ"
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage