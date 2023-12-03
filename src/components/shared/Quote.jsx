const Quote = ({ quoteText, author, authorDesignation, logoUrl }) => {
  return (
    <div className="space-y-4 p-8">
      <blockquote className="text-3xl text-center text-light font-serif">
        {`" ${quoteText} "`}
      </blockquote>
      <div className="flex max-sm:flex-col items-center justify-center max-sm:text-center gap-2">
        <img className="h-10" src={logoUrl} />
        <div className="text-sm">
          <p className="font-semibold ">{author}</p>
          <span className="text-gray-700">{authorDesignation}</span>
        </div>
      </div>
    </div>
  );
};

export default Quote;
