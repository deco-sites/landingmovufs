export default function NewsletterSignup() {
  return (
    <div class="bg-[#FAF7FD] p-2">
      <div class="w-full py-16 bg-secondary rounded-2xl"
        style={{
          backgroundImage:
            `url("data:image/svg+xml, %3Csvg%20width%3D%221496%22%20height%3D%22241%22%20viewBox%3D%220%200%201496%20241%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20opacity%3D%220.5%22%3E%0A%3Cg%20opacity%3D%220.09%22%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221632.5%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(1%200%200%20-1%20-211%2036.7344)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221632.5%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(1%200%200%20-1%20-211%20211.014)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221632.5%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(1%200%200%20-1%20-211%20123.875)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20536.497%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20187.937%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20885.051%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%201233.61%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%2013.6567%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20710.771%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20362.216%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%201059.33%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%201407.89%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20623.634%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20275.074%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20972.193%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%201320.75%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20100.799%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20797.914%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20449.354%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%201146.47%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%201495.03%201113.72)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20opacity%3D%220.5%22%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2286.6443%22%20transform%3D%22matrix(1%200%200%20-1%20711.516%20211.756)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.5%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2286.6443%22%20transform%3D%22matrix(1%200%200%20-1%20275.819%20211.756)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.2%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2286.6443%22%20transform%3D%22matrix(1%200%200%20-1%20189.174%20211.756)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.2%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2287.8821%22%20transform%3D%22matrix(1%200%200%20-1%20189.174%20125.112)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.2%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2286.6443%22%20transform%3D%22matrix(1%200%200%20-1%2014.6482%20298.401)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.2%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2286.6443%22%20transform%3D%22matrix(1%200%200%20-1%201060.57%20298.401)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.15%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2286.6443%22%20transform%3D%22matrix(1%200%200%20-1%201147.21%20211.756)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.15%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A")`,
          backgroundRepeat: "round",
        }}
      >
        <div class="flex flex-col md:flex-row items-center justify-around gap-4">
          <h2
            class="text-3xl font-bold text-center"
            dangerouslySetInnerHTML={{ __html: 'Entre seu e-mail para ficar sabendo <br> mais das novidades que estão por vir' }}
          />
          <form class="flex max-w-[80%] shrink flex-row items-center sm:gap-4 bg-[#FAF7FD] border border-black rounded-3xl p-1"
          onSubmit={() => {}}>
            <input
              type="email"
              placeholder="Escreva seu email"
              class="flex rounded-3xl bg-[#FAF7FD] px-4 py-2 border-0 max-w-[73%]"
              required
            />
            <button
              type="submit"
              class="flex px-6 py-2 btn btn-md btn-primary text-white rounded-3xl border-0"
            >
              <p class="hidden md:flex">participe</p>
              <div class="flex md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="send">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path fill="white" d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
              </svg>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}