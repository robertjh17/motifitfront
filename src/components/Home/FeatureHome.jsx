function FeatureHome() {
    return (
        <section className="py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4">Workout Plans</h3>
                    <p>Choose from a variety of workout plans tailored to your fitness level and goals.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4">Nutrition Guidance</h3>
                    <p>Get personalized nutrition advice and meal plans to support your fitness journey.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4">Track Progress</h3>
                    <p>Keep track of your workouts, monitor your progress, and stay motivated to reach your goals.</p>
                </div>
            </div>
        </section>
    )
}

export default FeatureHome;