import React from 'react';
import DriverCard from './drivercard';
import '../css/driverscardsfeed.css';

const DriversCardsFeed = () => {
  const driversData = [
    {
      id: 1,
      imageUrl: 'https://media.istockphoto.com/id/1284091019/photo/driver-in-uniform-standing-by-his-auto-rickshaw.jpg?s=612x612&w=0&k=20&c=KYTpY5Dp4zd0i6pFHMXzzb7Iyg0GKLOoWgwpFbsRl78=',
      businessName: 'Raza Auto Services',
      rating: 4.9,
      location: 'Haidar Nagar, Palamau',
      isAvailable: true,
    },
    {
      id: 2,
      imageUrl: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/02/12/957166-mumbaiautodriverhumansofbombayfacebook.jpg',
      businessName: 'John Auto Services',
      rating: 4.7,
      location: 'Haidar Nagar, Palamau',
      isAvailable: false,
    },
    {
      id: 3,
      imageUrl: 'https://www.aljazeera.com/wp-content/uploads/2009/05/200959122650138734_2.jpeg?resize=770%2C513&quality=80',
      businessName: 'Kumar Auto Rides',
      rating: 4.8,
      location: 'Ranchi, Jharkhand',
      isAvailable: true,
    },
    {
      id: 4,
      imageUrl: 'https://images.picxy.com/cache/2019/5/4/698e03b33f16b22ae2ae984aac580278.jpg',
      businessName: 'Mohan Rickshaw Service',
      rating: 4.5,
      location: 'Patna, Bihar',
      isAvailable: true,
    },
    {
      id: 5,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyC2UZFkRD5qTT6oqj5I0I59e_F5MRR5BFgvoarQh4eA&s',
      businessName: 'Singh Cab Services',
      rating: 4.6,
      location: 'Delhi, India',
      isAvailable: false,
    },
    {
      id: 6,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzg9SINLfJfXsfybl5_yF5kv26-XcnbDdUkSYh704KZqyY4V0tGsDUb7ooe_R35GFsa3s&usqp=CAU',
      businessName: 'Vikram Auto Solutions',
      rating: 4.7,
      location: 'Mumbai, Maharashtra',
      isAvailable: true,
    },
    {
      id: 7,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZWbdbkUYl9q0UhgNydNH8mpbtY8jND5Mk06WVHpkLNsYfyuDwyGflIs2Db_o8_Xt1kM&usqp=CAU',
      businessName: 'Sharma Travels',
      rating: 4.8,
      location: 'Chennai, Tamil Nadu',
      isAvailable: true,
    },
    {
      id: 8,
      imageUrl: 'https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-j3gtamhgin27ck5rrq7dnf3jr5-20160514063231.Medi.jpeg',
      businessName: 'Auto King',
      rating: 4.9,
      location: 'Kolkata, West Bengal',
      isAvailable: true,
    },
    {
      id: 9,
      imageUrl: 'https://media.istockphoto.com/id/1284091019/photo/driver-in-uniform-standing-by-his-auto-rickshaw.jpg?s=612x612&w=0&k=20&c=KYTpY5Dp4zd0i6pFHMXzzb7Iyg0GKLOoWgwpFbsRl78=',
      businessName: 'Gupta Auto Ride',
      rating: 4.6,
      location: 'Hyderabad, Telangana',
      isAvailable: false,
    },
    {
      id: 10,
      imageUrl: 'https://media.istockphoto.com/id/1284091019/photo/driver-in-uniform-standing-by-his-auto-rickshaw.jpg?s=612x612&w=0&k=20&c=KYTpY5Dp4zd0i6pFHMXzzb7Iyg0GKLOoWgwpFbsRl78=',
      businessName: 'A1 Auto Service',
      rating: 4.5,
      location: 'Ahmedabad, Gujarat',
      isAvailable: true,
    },
    {
      id: 11,
      imageUrl: 'https://media.istockphoto.com/id/1284091019/photo/driver-in-uniform-standing-by-his-auto-rickshaw.jpg?s=612x612&w=0&k=20&c=KYTpY5Dp4zd0i6pFHMXzzb7Iyg0GKLOoWgwpFbsRl78=',
      businessName: 'Verma Auto',
      rating: 4.4,
      location: 'Pune, Maharashtra',
      isAvailable: true,
    },
    {
      id: 12,
      imageUrl: 'https://media.istockphoto.com/id/1284091019/photo/driver-in-uniform-standing-by-his-auto-rickshaw.jpg?s=612x612&w=0&k=20&c=KYTpY5Dp4zd0i6pFHMXzzb7Iyg0GKLOoWgwpFbsRl78=',
      businessName: 'Rajesh Cab Services',
      rating: 4.9,
      location: 'Bangalore, Karnataka',
      isAvailable: false,
    },
    {
      id: 13,
      imageUrl: 'https://media.istockphoto.com/id/1284091019/photo/driver-in-uniform-standing-by-his-auto-rickshaw.jpg?s=612x612&w=0&k=20&c=KYTpY5Dp4zd0i6pFHMXzzb7Iyg0GKLOoWgwpFbsRl78=',
      businessName: 'Vikas Rickshaw',
      rating: 4.6,
      location: 'Surat, Gujarat',
      isAvailable: true,
    },
    {
      id: 14,
      imageUrl: 'https://media.istockphoto.com/id/1284091019/photo/driver-in-uniform-standing-by-his-auto-rickshaw.jpg?s=612x612&w=0&k=20&c=KYTpY5Dp4zd0i6pFHMXzzb7Iyg0GKLOoWgwpFbsRl78=',
      businessName: 'Sandeep Auto',
      rating: 4.7,
      location: 'Jaipur, Rajasthan',
      isAvailable: false,
    },
    {
      id: 15,
      imageUrl: 'https://media.istockphoto.com/id/1284091019/photo/driver-in-uniform-standing-by-his-auto-rickshaw.jpg?s=612x612&w=0&k=20&c=KYTpY5Dp4zd0i6pFHMXzzb7Iyg0GKLOoWgwpFbsRl78=',
      businessName: 'Naveen Auto Services',
      rating: 4.5,
      location: 'Lucknow, Uttar Pradesh',
      isAvailable: true,
    },
    {
      id: 16,
      imageUrl: 'https://media.istockphoto.com/id/1284091019/photo/driver-in-uniform-standing-by-his-auto-rickshaw.jpg?s=612x612&w=0&k=20&c=KYTpY5Dp4zd0i6pFHMXzzb7Iyg0GKLOoWgwpFbsRl78=',
      businessName: 'Vishnu Cab Services',
      rating: 4.8,
      location: 'Chandigarh, Punjab',
      isAvailable: true,
    },
    {
      id: 17,
      imageUrl: 'https://media.istockphoto.com/id/1284091019/photo/driver-in-uniform-standing-by-his-auto-rickshaw.jpg?s=612x612&w=0&k=20&c=KYTpY5Dp4zd0i6pFHMXzzb7Iyg0GKLOoWgwpFbsRl78=',
      businessName: 'Suresh Auto Ride',
      rating: 4.9,
      location: 'Bhopal, Madhya Pradesh',
      isAvailable: true,
    },
    {
      id: 18,
      imageUrl: 'https://media.istockphoto.com/id/1284091019/photo/driver-in-uniform-standing-by-his-auto-rickshaw.jpg?s=612x612&w=0&k=20&c=KYTpY5Dp4zd0i6pFHMXzzb7Iyg0GKLOoWgwpFbsRl78=',
      businessName: 'Raj Auto Services',
      rating: 4.7,
      location: 'Indore, Madhya Pradesh',
      isAvailable: false,
    },
    {
      id: 19,
      imageUrl: 'https://media.istockphoto.com/id/1284091019/photo/driver-in-uniform-standing-by-his-auto-rickshaw.jpg?s=612x612&w=0&k=20&c=KYTpY5Dp4zd0i6pFHMXzzb7Iyg0GKLOoWgwpFbsRl78=',
      businessName: 'Deepak Rickshaw',
      rating: 4.5,
      location: 'Nagpur, Maharashtra',
      isAvailable: true,
    },
    {
      id: 20,
      imageUrl: 'https://media.istockphoto.com/id/1284091019/photo/driver-in-uniform-standing-by-his-auto-rickshaw.jpg?s=612x612&w=0&k=20&c=KYTpY5Dp4zd0i6pFHMXzzb7Iyg0GKLOoWgwpFbsRl78=',
      businessName: 'Ajay Auto Services',
      rating: 4.6,
      location: 'Coimbatore, Tamil Nadu',
      isAvailable: true,
    },
  ];

  return (
    <div className="drivers-cards-feed">
      {driversData.map(driver => (
        <DriverCard
          key={driver.id}
          imageUrl={driver.imageUrl}
          businessName={driver.businessName}
          rating={driver.rating}
          location={driver.location}
          isAvailable={driver.isAvailable}
          onBookNow={() => alert(`Booking confirmed for ${driver.businessName}`)}
        />
      ))}
    </div>
  );
};

export default DriversCardsFeed;
