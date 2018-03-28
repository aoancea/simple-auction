export class UserService {
    constructor() { }

    getUsers() {
        return [
            { email: 'user1@user.com' },
            { email: 'user2@user.com' },
            { email: 'user3@user.com' },
            { email: 'user4@user.com' },
            { email: 'user5@user.com' }
        ];
    }
}
