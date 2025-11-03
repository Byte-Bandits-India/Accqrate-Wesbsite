interface UpdateCardProps {
  image: string;
  title: string;
  description: string;
}

const UpdateCard = ({ image, title, description }: UpdateCardProps) => {
  return (
    <div className="overflow-hidden   ">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-auto lg:w-[500px] lg:h-[276px] object-cover"
        />

      </div>
      <div className="py-6 max-w-lg">
        <h3 className="text-[18px] md:text-fluid-body text-black font-semibold mb-2 md:mb-4 ">{title}</h3>
        <p className="text-[15px] text-fluid-small text-left text-black leading-tight">{description}</p>
      </div>
    </div>
  );
};

export default UpdateCard;
