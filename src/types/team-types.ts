export type TeamMemberType = {
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
    role: string;
};

export type CreateTeamMemberType = {
    firstName: string;
    lastName: string;
    role: string;
}