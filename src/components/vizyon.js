import React from 'react'
import duvar from '../assets/duvar.jpg';
function vizyon() {
  return (
    <section class="text-gray-600 body-font py-52">
      <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded max-w-lg max-h-lg"
            alt="duvar"
            src={duvar}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Vizyonumuz
          </h1>
          <p class="mb-8 leading-relaxed">Vizyon konuşması</p>
        </div>
      </div>
    </section>
  );
}

export default vizyon
