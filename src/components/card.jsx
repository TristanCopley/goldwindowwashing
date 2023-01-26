import './card.css';

const Card = ({ img, title, description }) => {

    return (

        <div className='card w-104 flex flex-col justify-center gap-y-4 h-full bg-yellow-600 relative rounded-md'>

            <img src={img} alt='GWW Temp Image' className='w-full h-full object-cover absolute opacity-50  rounded-md'/>

            <h1 className='text-3xl text-center absolute flex self-center text-white'>{title}</h1>
            <div className='card-text bg-yellow-500 absolute w-full h-full rounded-md flex justify-center'>
                <p className='text-center flex self-center p-4 text-white'>{description}</p>
            </div>
        </div>

    );

}

export default Card;