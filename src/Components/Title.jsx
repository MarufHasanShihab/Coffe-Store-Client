

const Title = ({subTitle, title}) => {
    return (
        <div className="text-center">
            <h5 className="text-xl font-normal font-relway leading-relaxed">{subTitle}</h5>
            <h2 className="text-[#331a15] text-[40px] md:text-[55px] font-normal font-rancho">{title}</h2>
        </div>
    );
};

export default Title;