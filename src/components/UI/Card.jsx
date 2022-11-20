import commafy from '../../helpers/commafy';

const Card = ({ coin }) => {
  return (
    <div className='flex gap-x-4 justify-between items-center bg-[#11154d] rounded p-4'>
      {/* Info */}
      <div className='flex gap-x-4 items-center w-1/3 justify-start'>
        <img src={coin.currency1.image} width='32' height='32' alt={`${coin.currency1.title} Logo`} loading='lazy' />
        <span>{coin.currency1.title_fa}</span>
        <span className='text-[#9596F5] text-sm'>{coin.code}</span>
      </div>

      {/* Price */}
      <div className='w-1/3 flex justify-center'>
        <span>{commafy(+coin.price_info.price)}</span>
      </div>

      {/* Changes */}
      <div className='w-1/3 flex justify-end'>
        <div
          className={`p-2 rounded-md w-20 flex justify-center items-center ${
            +coin.price_info.change > 0 ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          <span dir='ltr' className='text-sm'>
            {+coin.price_info.change > 0 && '+'}
            {+coin.price_info.change.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
