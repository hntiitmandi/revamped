import {motion} from "framer-motion";

function BlogCard(props) {
  return (
    <>
      <motion.div initial={{ opacity: 0,y :100 }}
          whileInView={{ opacity: 1,y:0 }}
          transition={{ delay: 0.10 }}
          viewport={{ once: true }}
          className="max-w-lg bg-white border rounded-lg shadow  border-gray-700">
        <img className="rounded-t-lg" src={props.photo_url} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {props.title}
          </h5>
          <p className="text-gray-400">
            By {props.author} • {props.dateTime} •
          </p>
          <p className="mb-3 font-normal text-gray-700 pt-2">
            {props.description}
          </p>
          <a
            href={props.articleLink}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default BlogCard;
