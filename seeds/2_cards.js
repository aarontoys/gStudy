
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('cards').del(), 

    // Inserts seed entries
    knex('cards').insert({
      id: 1, 
      question: 'Test JS question 1',
      answer: 'Test JS answer 1',
      question_img_url: '',
      answer_img_url: '',
      deck_id: 1
    }),
    knex('cards').insert({
      id: 2, 
      question: 'Test JS question 2',
      answer: 'Test JS answer 2',
      question_img_url: '',
      answer_img_url: '',
      deck_id: 1
    }),
    knex('cards').insert({
      id: 3, 
      question: 'Test JS question 3',
      answer: 'Test JS answer 3',
      question_img_url: '',
      answer_img_url: '',
      deck_id: 1
    }),
    knex('cards').insert({
      id: 4, 
      question: 'Test jQuery question 1',
      answer: 'Test jQuery answer 1',
      question_img_url: '',
      answer_img_url: '',
      deck_id: 2
    }),
    knex('cards').insert({
      id: 5, 
      question: 'Test jQuery question 2',
      answer: 'Test jQuery answer 2',
      question_img_url: '',
      answer_img_url: '',
      deck_id: 2
    }),
    knex('cards').insert({
      id: 6, 
      question: 'Test jQuery question 3',
      answer: 'Test jQuery answer 3',
      question_img_url: '',
      answer_img_url: '',
      deck_id: 2
    }),
    knex('cards').insert({
      id: 7, 
      question: 'Test Angular question 1',
      answer: 'Test Angular answer 1',
      question_img_url: '',
      answer_img_url: '',
      deck_id: 3
    }),
    knex('cards').insert({
      id: 8, 
      question: 'Test Angular question 2',
      answer: 'Test Angular answer 2',
      question_img_url: '',
      answer_img_url: '',
      deck_id: 3
    }),
    knex('cards').insert({
      id: 9, 
      question: 'Test Angular question 3',
      answer: 'Test Angular answer 3',
      question_img_url: '',
      answer_img_url: '',
      deck_id: 3
    })
  );
};
