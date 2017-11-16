const { Lokka } = require('lokka'),
    { Transport } = require('lokka-transport-http');

const client = new Lokka({
    transport: new Transport('https://simple-api-url-here')
});

const createParticipant = async(participant) => {
    return await client.mutate(`{
        participant: createParticipant(
            surname: "${participant.surname}"
            lastname: "${participant.lastname}"
        ) {
            id
        }
    
    }`).participant
};

const createParticipants = async(participants) => await Promise.all(participants.map(createParticipant));

const execute = async() => {
    const participantsJson = require('./data/participants.json');

    const ps = await createParticipants(participantsJson);
    console.log(`Created ${ps.length} participants`);
};

execute().catch(console.error);
