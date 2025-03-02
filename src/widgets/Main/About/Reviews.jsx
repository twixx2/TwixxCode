const Reviews = () => {

    const reviews = [
        {
            name: 'Анастасия',
            span: '★★★★★',
            descr: 'Работа с Никитой была отличным опытом! Все задачи выполнены качественно, быстро и с учётом всех моих пожеланий. Очень довольна результатом.'
        },

        {
            name: 'Иван',
            span: '★★★★★',
            descr: 'Рад, что выбрал Никиту для этого проекта! Работать с ним легко, результат оказался точным и эффективным.'
        },

        {
            name: 'Злата',
            span: '★★★★★',
            descr: 'Никита превзошёл ожидания! Внимание к деталям и высокая скорость работы — это то, что мне было нужно.'
        },

        {
            name: 'Дмитрий',
            span: '★★★★★',
            descr: 'Очень доволен результатом! Никита грамотно подошёл к задаче, всё выполнено в срок и на высшем уровне.'
        }
    ];


    return (
        <div className="reviews container">

            <h3>Что они <span>говорят</span>  обо мне</h3>

            <div className="reviews__content">

                {reviews.map((review, index) =>

                    <div key={index} className="review-card">
                        <div className="review-header">
                            <div className="avatar"></div>
                            <div className="review-info">
                                <div className="review-name">{review.name}</div>
                                <div className="stars">
                                    <span>{review.span}</span>
                                </div>
                            </div>
                        </div>
                        <div className="review-text">
                            {review.descr}
                        </div>
                    </div>

                )}

            </div>


        </div>
    );

}

export default Reviews;