import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Search from "./Search";
import Tags from "./Tags";

import blogThumb1 from "../../assets/images/blog/blogthumb1.png";
import blogThumb2 from "../../assets/images/blog/blogthumb2.png";
import blogThumb3 from "../../assets/images/blog/blogthumb3.png";

import FadeInStagger from "../animation/FadeInStagger";
import BlogCard from "./BlogCard";
import NewsLetter from "./NewsLetter";
import Pagination from "./Pagination";
import { useLanguage } from "../../context/LanguageContext";

function Blog() {
	const { t } = useLanguage();

	// Get blog posts from translations
	const blogPosts = t('blog.posts');

	const postsArray = Array.isArray(blogPosts) ? blogPosts : [];

	const blogData = postsArray.slice(0, 6).map((post, index) => ({
		id: index + 1,
		image: [blogThumb1, blogThumb2, blogThumb3][index % 3],
		category: post.category,
		date: post.date,
		title: post.title,
		description: post.excerpt,
	}));

	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						{blogData.map((blog, index) => (
							<FadeInStagger className="sofax-inner-blog-wrap" key={blog.id} index={index}>
								<BlogCard blog={blog} />
							</FadeInStagger>
						))}
						<Pagination />
					</div>
					<div className="col-lg-4">
						<div className="sofax-inner-blog-sidebar-menu">
							<Search />
							<Categories />
							<RecentPosts />
							<Tags />
							<NewsLetter />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Blog;

