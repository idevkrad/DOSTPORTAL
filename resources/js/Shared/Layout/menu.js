export const menuItems = [{
        id: 1,
        label: "Menu",
        isTitle: true,
        user: [],
    },
    {
        id: 2,
        label: "Home",
        icon: "bx-home-circle",
        link: "/home",
        component: "Home/Index",
        name: "Home",
        user: [],
    },
    {
        id: 3,
        label: "Employees",
        icon: "bxs-face",
        link: "/employees",
        component: "Employees/Index",
        name: "Employees",
        user: ['Super Administrator'],
    },
    {
        id: 3,
        label: "Date Time Record",
        icon: "bx-timer",
        link: "/dtr",
        component: "Dtr/Index",
        name: "Dtr",
        user: ['Super Administrator'],
    },
    {
        id: 7,
        label: "Leave Application",
        icon: "bx-file",
        link: "/leave",
        component: "Leave/Index",
        name: "Leave",
        user: ['Super Administrator'],
    },
    {
        id: 4,
        label: "Calendar",
        icon: "bxs-calendar",
        link: "/calendar",
        component: "Calendar/Index",
        name: "Calendar",
        user: ['Super Administrator'],
    },
];