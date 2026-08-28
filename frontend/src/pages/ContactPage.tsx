export function ContactPage() {
  return (
    <section className="page-section contact-page">
      <div className="container contact-layout">
        <div className="page-hero"><span className="eyebrow">CONTACT</span><h1>문의하기</h1><p>서비스 이용 중 궁금한 점이나 제안이 있다면 알려주세요.</p></div>
        <form className="contact-form"><label>이름<input type="text" placeholder="이름을 입력하세요" /></label><label>이메일<input type="email" placeholder="reply@example.com" /></label><label>문의 내용<textarea rows={7} placeholder="문의 내용을 입력하세요" /></label><button className="button button--primary" type="button">문의 보내기</button></form>
      </div>
    </section>
  )
}
