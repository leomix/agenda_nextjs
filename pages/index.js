import Container from "../components/container"
import fetch from "isomorphic-fetch"
import Users from "../components/users";
const index = (props) => {
  console.log(props)
  return (
    <Container title="Agenda - Inicio">
      <h1>Index</h1>
      <Users users={props.data}></Users>
    </Container>

  )
}
index.getInitialProps = async (ctx) => {
  const res = await fetch('https://reqres.in/api/users?page=2')
  const json = await res.json()
  return {
    data:json.data
  }
}

export default index
