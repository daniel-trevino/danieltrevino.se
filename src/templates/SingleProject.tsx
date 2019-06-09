import * as React from 'react'
import { IProject } from '../interfaces/ProjectInterface'
import Layout from '../components/Layout'

interface IProps {
  pageContext: IProject
}

const SingleProject = (props: IProps) => {
  const data = props.pageContext
  const titleHtml = data.title.html
  const descriptionHtml = data.description.html

  const generateMarkup = () => {
    return { __html: `${titleHtml} ${descriptionHtml}` }
  }
  return (
    <Layout fullWidth={false} secondaryColor>
      <div dangerouslySetInnerHTML={generateMarkup()} />
    </Layout>
  )
}

export default SingleProject
