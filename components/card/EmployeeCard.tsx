import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';

export default function EmployeeCard({
  image,
  firstName,
  lastName,
  company,
}: any) {
  return (
    <Card className='py-4 hover:bg-gray-700'>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <p className='text-tiny uppercase font-bold'>
          {firstName}
          {lastName}
        </p>
        <small className='text-default-500'>{company?.name}</small>
        <h4 className='font-bold text-large'>{company?.title}</h4>
      </CardHeader>
      <CardBody className='overflow-visible py-2'>
        <Image
          alt='Card background'
          className='object-cover rounded-xl'
          src={image}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
