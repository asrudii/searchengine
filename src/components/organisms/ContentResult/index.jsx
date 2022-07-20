import CardResult from '../../molecules/CardResult';
import ImageResult from '../../molecules/ImageResult';
import NewsResult from '../../molecules/NewsResult';

export default function ContentResult({ searchType, dataSearch, loading }) {
  switch (searchType) {
    case 'Image':
      return !dataSearch?.image_results?.length && !loading ? (
        <div className="text-lg text-semibold text-semiblack lg:ml-56 sm:w-full lg:w-content ">
          <span>Sorry, we didn't find any results</span>
        </div>
      ) : (
        dataSearch?.image_results?.map((item) => {
          return (
            <ImageResult
              key={`${item.link.title}-${item.link.href}`}
              src={item.image.src}
              link={item.link.href}
              title={item.link.title}
            />
          );
        })
      );
    case 'News':
      return !dataSearch?.entries?.length && !loading ? (
        <div className="text-lg text-semibold text-semiblack sm:w-full lg:w-content ">
          <span>Sorry, we didn't find any results</span>
        </div>
      ) : (
        dataSearch?.entries?.map((item) => {
          return (
            <NewsResult
              key={`${item.title}-${item.link}`}
              title={item.title}
              link={item.link}
              published={`${item.published_parsed[2]}-${item.published_parsed[1]}-${item.published_parsed[0]}`}
              source={item.source.href}
              titleSource={item.source.title}
            />
          );
        })
      );

    case 'Normal':
      return !dataSearch?.results?.length && !loading ? (
        <div className="text-lg text-semibold text-semiblack sm:w-full lg:w-content ">
          <span>Sorry, we didn't find any results</span>
        </div>
      ) : (
        <>
          {dataSearch?.total && (
            <span className="text-semiblack text-sm pb-5">
              {dataSearch?.total?.toLocaleString()} Results
            </span>
          )}
          {dataSearch?.results?.map((item) => {
            return (
              <CardResult
                key={`${item.title}-${item.link}`}
                title={item.title}
                desc={item.description}
                link={item.link}
                cite={item.cite.domain}
              />
            );
          })}
        </>
      );
    default:
      break;
  }
}
