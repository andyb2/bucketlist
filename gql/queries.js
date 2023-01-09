import { gql } from '@apollo/client';

export const FIND_USER = gql`
    query FindUser($uid: String!) {
        users(uid: $uid) {
            email
        }
    }
`;

export const CREATE_USER = gql`
    muatation CreateUser($uid: String!, $email: String!) {
        insert_users(uid: $uid, email: $email) {
            email
            uid
        }
    }
`;
