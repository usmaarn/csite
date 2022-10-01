import { PrismaClient } from ".prisma/client"

export default function users({users}) {

    users = JSON.parse(users);

    return(
        <section>
            <h1>All Users</h1>
            <table className="table-fixed w-full text-left">
                <thead className="capitalize">
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>ward</th>
                        <th>polling unit</th>
                        <th>p.v.c. number</th>
                        <th>phone number</th>
                        <th>address</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user => (
                        <tr key={user.id}>
                            <th>{user.id }</th>
                            <td>{user.name}</td>
                            <td>{user.ward}</td>
                            <td>{user.polling_unit}</td>
                            <td>{user.pvc_number}</td>
                            <td>{user.phone_number}</td>
                            <td>{user.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export async function getServerSideProps(ctx){

    const prisma = new PrismaClient();
    const users = await prisma.users.findMany();

    return { props: {
        users: JSON.stringify(users),
    }}
}