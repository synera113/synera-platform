import Link from 'next/link';

export default function OrganizationSetupPage() {
  return (
    <main className="min-h-screen bg-ivory px-5 py-10 sm:px-8">
      <header className="mx-auto flex max-w-3xl items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-[0.18em] text-forest">SYNERA</Link>
        <Link href="/login" className="text-sm font-medium text-forest hover:text-gold">Giriş</Link>
      </header>
      <section className="mx-auto mt-16 max-w-3xl border border-forest/10 bg-white p-8 shadow-soft sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">İşletme kurulumu</p>
        <h1 className="mt-3 text-3xl font-semibold text-forest sm:text-4xl">İşletmenizi tanımlayın</h1>
        <p className="mt-4 max-w-xl leading-7 text-charcoal/70">Bu adım, kuruluş tamamlandığında hesabınıza özel çalışma alanını kuracaktır.</p>
        <form className="mt-9 grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-medium text-charcoal sm:col-span-2">İşletme adı<input type="text" placeholder="Örn. Synera Studio" disabled className="mt-2 w-full border border-charcoal/15 bg-ivory/50 px-4 py-3 outline-none placeholder:text-charcoal/40 disabled:cursor-not-allowed" /></label>
          <label className="text-sm font-medium text-charcoal">Sektör<input type="text" placeholder="Örn. Güzellik ve bakım" disabled className="mt-2 w-full border border-charcoal/15 bg-ivory/50 px-4 py-3 outline-none placeholder:text-charcoal/40 disabled:cursor-not-allowed" /></label>
          <label className="text-sm font-medium text-charcoal">Telefon (isteğe bağlı)<input type="tel" placeholder="+90 ..." disabled className="mt-2 w-full border border-charcoal/15 bg-ivory/50 px-4 py-3 outline-none placeholder:text-charcoal/40 disabled:cursor-not-allowed" /></label>
          <button type="button" disabled className="bg-forest px-5 py-3.5 text-sm font-semibold text-white opacity-50 sm:col-span-2">İşletme oluştur — veri bağlantısı gerekli</button>
        </form>
        <p className="mt-6 border-l-2 border-gold pl-3 text-sm leading-6 text-charcoal/70">Bu arayüz şu anda veri kaydetmez. İşletme oluşturma, kimlik doğrulama ve tenant yetkilendirmesi Supabase yapılandırıldıktan sonra uygulanmalıdır.</p>
      </section>
    </main>
  );
}
