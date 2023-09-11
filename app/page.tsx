'use client';

import EmployeeCard from '@/components/card/EmployeeCard';
import NavBar from '@/components/navbar/NavBar';
import useFetch from '@/hooks/useFetch';
import { Spinner } from '@nextui-org/react';

const Home = () => {
  const { data, loading, error } = useFetch('https://dummyjson.com/users');
  return (
    <div>
      <NavBar />
      {loading && <Spinner color='primary' size='lg' />}

      <div className='flex items-center gap-6 flex-wrap'>
        {data?.users.map((item: any) => (
          <EmployeeCard
            key={item?.id}
            firstName={item?.firstName}
            lastName={item?.lastName}
            company={item?.company}
            image={item?.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
