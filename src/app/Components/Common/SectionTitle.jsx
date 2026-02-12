import parse from 'html-react-parser';

const SectionTitle = ({Title,SubTitle}) => {
    return (
       <div>
        
            <h1 className="cs_section_subtitle cs_fs_18 cs_accent_color cs_semibold text-uppercase cs_mb_12 wow fadeInDown" style={{ fontSize: '50px' }}>
                {parse(SubTitle)}
            </h1>
            <p className="cs_mb_40" style={{ fontSize: '20px' }}>
                {parse(Title)}
            </p>

        </div> 
    );
};

export default SectionTitle;