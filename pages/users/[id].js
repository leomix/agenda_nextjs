import {useRouter} from "next/router"
import fetch from "isomorphic-fetch"
import Container from "../../components/container";
const User = ({data}) => {
    const router = useRouter()
    const {id}= router.query

    return (
        <Container>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card-header text-center">
                        <img src={data.avatar} alt=""/>
                    </div>
                    <div className="card-body text-center">
                        <h3>{data.id}. {data.first_name +  data.last_name}</h3>
                        <p>Email:{data.email}</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

User.getInitialProps = async (ctx) => {
   const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`)
   const json = await res.json()

    return {
        data:json.data
    }
}
export default User
