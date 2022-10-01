import { PrismaClient } from ".prisma/client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Users({users}) {

    const session = useSession();
    users = JSON.parse(users);

    useEffect(() => {
        if(!session.data) {
            return location.href = '/';
        }
    }, [])

    return(
        <section>
            <h1 className="p-5">All Users</h1>

            <div class="overflow-x-auto relative">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6"> Id </th>
                            <th scope="col" class="py-3 px-6"> Name </th>
                            <th scope="col" class="py-3 px-6"> Ward </th>
                            <th scope="col" class="py-3 px-6"> polling unit </th>
                            <th scope="col" class="py-3 px-6"> phone number </th>
                            <th scope="col" class="py-3 px-6"> address </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map(user => (
                            <tr key={user.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {user.id}
                                </th>
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {user.name}
                                </th>
                                <td class="py-4 px-6"> {user.ward} </td>
                                <td class="py-4 px-6"> {user.polling_unit} </td>
                                <td class="py-4 px-6">{user.phone_number}</td>
                                <td class="py-4 px-6">{user.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>              
        </section>
    )
}

export async function getServerSideProps({req, res}){

    const prisma = new PrismaClient();
    const users = await prisma.users.findMany();

    return { props: {
        users: JSON.stringify(users),
    }}
}