export interface Doctor {
    id: number;
    name: string,
    specialty: string;
    imageUrl: string;
    address: string;
}

export const doctors: Doctor[] = [
    {
        id: 1,
        name: "Dr. John Smith",
        specialty: "Cardiology",
        imageUrl: "/imgs/duck.png",
        address: "123 Heart St, New York, NY"
    },
    {
        id: 2,
        name: "Dr. Sarah Johnson",
        specialty: "Dermatology",
        imageUrl: "/imgs/duck.png",
        address: "456 Skin Ave, Los Angeles, CA"
    },
    {
        id: 3,
        name: "Dr. Michael Brown",
        specialty: "Neurology",
        imageUrl: "/imgs/duck.png",
        address: "789 Brain Rd, Chicago, IL"
    },
    {
        id: 4,
        name: "Dr. Emily Davis",
        specialty: "Pediatrics",
        imageUrl: "/imgs/duck.png",
        address: "101 Child Ln, Houston, TX"
    },
    {
        id: 5,
        name: "Dr. James Wilson",
        specialty: "Orthopedics",
        imageUrl: "/imgs/duck.png",
        address: "202 Bone St, Phoenix, AZ"
    },
    {
        id: 6,
        name: "Dr. Jessica Martinez",
        specialty: "Gastroenterology",
        imageUrl: "/imgs/duck.png",
        address: "303 Stomach Blvd, Philadelphia, PA"
    },
    {
        id: 7,
        name: "Dr. David Lee",
        specialty: "Oncology",
        imageUrl: "/imgs/duck.png",
        address: "404 Cancer St, San Diego, CA"
    },
    {
        id: 8,
        name: "Dr. Maria Rodriguez",
        specialty: "Psychiatry",
        imageUrl: "/imgs/duck.png",
        address: "505 Mind Ave, San Antonio, TX"
    },
    {
        id: 9,
        name: "Dr. Robert Thompson",
        specialty: "Ophthalmology",
        imageUrl: "/imgs/duck.png",
        address: "606 Eye St, Dallas, TX"
    },
    {
        id: 10,
        name: "Dr. Linda White",
        specialty: "Gynecology",
        imageUrl: "/imgs/duck.png",
        address: "707 Women’s Health Blvd, San Jose, CA"
    }
];
