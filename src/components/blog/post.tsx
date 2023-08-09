import Image from 'next/image';

function Post() {
  return (
    <article className="mx-auto w-2/3">
      <div>
        <h2 className="mx-auto w-1/2 text-center font-title text-4xl tracking-tight">
          Receitas da sua vó Matilda
        </h2>
      </div>
      <div className="mt-16 flow-root px-4">
        <div className="float-left">
          <Image
            alt="teste"
            src={
              '/images/kevin-kelly-PPneSBqfCCU-unsplash.jpg'
            }
            // o tamanho vai ter que ser
            // dinamico e baseado nas dimensões de cada imagem
            width={354}
            height={531}
            className="mb-[1px] mr-5 h-[371px] w-[247px] pt-2"
          />
        </div>
        <div
          className="text-justify indent-2 font-text text-lg leading-snug"
          style={{ wordSpacing: '-3px' }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque, nostrum modi!
            Perferendis nobis maiores provident quas
            excepturi similique culpa unde quod molestiae
            omnis? Voluptas architecto nesciunt mollitia
            dignissimos aspernatur cum. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Atque,
            nostrum modi! Perferendis nobis maiores
            provident quas excepturi similique culpa unde
            quod molestiae omnis? Voluptas architecto
            nesciunt mollitia dignissimos aspernatur cum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque, nostrum modi!
            Perferendis nobis maiores provident quas
            excepturi similique culpa unde quod molestiae
            omnis? Voluptas architecto nesciunt mollitia
            dignissimos aspernatur cum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque, nostrum modi!
            Perferendis nobis maiores provident quas
            excepturi similique culpa unde quod molestiae
            omnis? Voluptas architecto nesciunt mollitia
            dignissimos aspernatur cum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque, nostrum modi!
            Perferendis nobis maiores provident quas
            excepturi similique culpa unde quod molestiae
            omnis? Voluptas architecto nesciunt mollitia
            dignissimos aspernatur cum.
          </p>
          <p>
            Voluptas architecto nesciunt mollitia
            dignissimos aspernatur cum. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Atque,
            nostrum modi! Perferendis nobis maiores
            provident quas excepturi similique culpa unde
            quod molestiae omnis? Voluptas architecto
            nesciunt mollitia dignissimos aspernatur cum.
          </p>
        </div>
      </div>
    </article>
  );
}

export default Post;
