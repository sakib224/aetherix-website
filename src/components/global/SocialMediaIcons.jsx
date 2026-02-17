const SocialMediaIcons = ({
    className = '',
    iconSize = 'w-5 h-5',
    buttonSize = 'w-10 h-10',
    gap = 'gap-6 py-4',
}) => {
    const socialLinks = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/profile.php?id=61572936163500',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png',
            bgColor: 'bg-[#1877F2]',
        },
        {
            name: 'X',
            url: 'https://x.com/Aetherix025',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/twitterx.png',
            bgColor: 'bg-[#000000]',
        },
        // {
        //     name: 'Instagram',
        //     url: 'https://instagram.com/yourprofile',
        //     icon: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png',
        //     bgColor: 'bg-[#E4405F]',
        // },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/company/aetherix-limited/?viewAsMember=true',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/linkedin.png',
            bgColor: 'bg-[#0A66C2]',
        },
    ];

    return (
        <div className={`flex ${gap} ${className}`}>
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${buttonSize} flex items-center justify-center rounded-full ${social.bgColor} text-white transition-opacity duration-300 hover:opacity-90`}
                    aria-label={social.name}
                >
                    <img src={social.icon} alt={social.name} className={iconSize} />
                </a>
            ))}
        </div>
    );
};

export default SocialMediaIcons;
