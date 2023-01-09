import { client, FIND_USER } from '../../gql';
import { CREATE_USER } from '../../gql/queries';

export const findUser = async (uid) => {
    try {
        const { data } = await client.query({
            query: FIND_USER,
            variables: {
                uid,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const createUser = async () => {
    try {
        const { data } = await client.mutate({
            mutation: CREATE_USER,
            variables: {
                uid,
                email,
            },
            refetchQueries: [
                {
                    query: FIND_USER,
                    variables: {
                        uid,
                    },
                },
            ],
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
