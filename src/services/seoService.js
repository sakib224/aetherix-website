import https from "@/services/https";

const homepageInfo = async () => {
    const res = await https.get('/seo');
    return res?.data;
}

const aboutInfo = async () => {
    const res = await https.get('about');
    return res?.data;
}

const seoService = {
    homepageInfo,
    aboutInfo,
};
  
export default seoService;