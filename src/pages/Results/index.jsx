import CardResult from '../../components/molecules/CardResult';
import ImageResult from '../../components/molecules/ImageResult';
import NewsResult from '../../components/molecules/NewsResult';
import Pagination from '../../components/molecules/Pagination';
import Footer from '../../components/organisms/Footer';
import Loading from '../../components/organisms/Loading';
import Navbar from '../../components/organisms/Navbar';

export default function Results() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Normal result */}
      <div className="flex flex-col lg:w-content flex-1 lg:ml-60 pt-10 px-10">
        <CardResult />
        <Pagination />
      </div>
      {/* Image result */}
      {/* <div className="flex flex-wrap gap-6 px-6 pt-10 items-end">
        <ImageResult src="https://akcdn.detik.net.id/community/media/visual/2022/05/19/elon-musk-twitter_43.jpeg?w=700&q=90" />
        <ImageResult src="https://awsimages.detik.net.id/community/media/visual/2022/05/03/elon-musk-dan-maye-musk-di-met-gala-2022-3_169.jpeg?w=700&q=90" />
        <ImageResult src="https://img.tek.id/img/content/2022/07/14/52849/tak-jadi-beli-twitter-elon-musk-bakal-buat-pesaingnya-U5hhPyRlYb.jpg" />
        <ImageResult src="https://akcdn.detik.net.id/community/media/visual/2022/06/21/elon-musk-di-met-gala-2022_169.jpeg?w=700&q=90" />
        <ImageResult src="https://cdn.motor1.com/images/mgl/nOlNy/s3/elon-musk.jpg" />
        <ImageResult src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/640px-Elon_Musk_2015.jpg" />
        <ImageResult src="https://cdn.motor1.com/images/mgl/nOlNy/s3/elon-musk.jpg" />
        <ImageResult src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/640px-Elon_Musk_2015.jpg" />
        <ImageResult src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/640px-Elon_Musk_2015.jpg" />
        <ImageResult src="https://cdn.motor1.com/images/mgl/nOlNy/s3/elon-musk.jpg" />
      </div> */}
      {/* News result */}
      {/* <div className="flex flex-col lg:w-content flex-1 lg:ml-60 pt-10 px-10">
        <NewsResult />
        <NewsResult />
        <Pagination />
      </div> */}
      <Footer />
      {/* <Loading /> */}
    </div>
  );
}
