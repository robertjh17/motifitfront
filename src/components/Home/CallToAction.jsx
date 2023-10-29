import { Link } from 'react-router-dom';
function CallToAction() {
    return (
        < section className = "bg-blue-800 text-white py-16" >
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg mb-8">Join FitnessApp today and transform your life with fitness.</p>
                <Link to="/register" className="bg-motigreen-500 hover:bg-motigreen-600 text-white-900 rounded-full px-8 py-4 inline-block font-semibold">Sign Up Now</Link>
            </div>
            </section >
    )
}

export default CallToAction;