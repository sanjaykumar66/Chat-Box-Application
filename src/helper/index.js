const bob = {
    id: 23,
    firstName: 'Bob',
    lastName: 'Greatlance',
    thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const jack = {
    id: 48,
    firstName: 'Jack',
    lastName: 'Dowager',
    thumbnail: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const messages = [
    {
        id: 1,
        from: bob,
        message: 'Hey bro, how\'s things?',
        date: '2020-04-07 10:03:23',
    },
    {
        id: 2,
        from: bob,
        message: `I was working in the garden and just thought of you!
Hope you're not too worried about everything thats is going on right now.`,
        date: '2020-04-07 10:03:45',
    },
    {
        id: 3,
        from: jack,
        message: 'Heeey! Long time! Thanks for your message, man!',
        date: '2020-04-07 10:06:15',
    },
    {
        id: 4,
        from: jack,
        message: 'I am doing quite alright, thanks. How about you?',
        date: '2020-04-07 10:06:24',
    },
    {
        id: 5,
        from: bob,
        message: `Can't complain.
I was watching this movie the other night that really reminded me of our first project working together.
There were these three 17-year-olds who had just heard of Python and decided to build the next great thing in social networking, so they spent about a week pulling off all-nighters and barely got anywhere :))
I think you can imagine what happens next 🙃`,
        date: '2020-04-07 10:07:01',
    },
    {
        id: 6,
        from: jack,
        message: '😂😂😂 Did they end up driving to the seaside and sleeping in the sun until they got severe sunburn like we did?',
        date: '2020-04-07 10:08:55',
    },
    {
        id: 7,
        from: bob,
        message: `Something not very far from that!`,
        date: '2020-04-07 10:03:45',
    },
];

export const currentUser = JSON.stringify(bob);
export const conversation = JSON.stringify(messages);
export const otherUser = JSON.stringify(jack);