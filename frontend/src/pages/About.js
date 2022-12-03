import Markdown from "markdown-to-jsx";

function About() {
  return (
    // this is a ridiculously lazy solution, want to replace with markdown:
    <>
      <h1 className="title">About KIDATA</h1>
        <div className="content-card">
            <p  class = "information"> <em><b>
                KIDATA's vision is to get kids interested in data visualization through fun games and cute pictures.
                In today's age, where we cannot live without the internet, it is essential for children to be exposed
                to and learn about data visualization in advance. Our team believes that it is most important for children
                to learn while having fun.
            </b></em>
                <br></br>

            </p>
        </div>
    </>
  )
}

export default About;