import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ivory px-5 py-12">
      <section className="w-full max-w-md">
        <Link href="/" className="text-sm font-semibold tracking-[0.18em] text-forest">SYNERA</Link>
        <div className="mt-8 border border-forest/10 bg-white p-8 shadow-soft sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Hoş geldiniz</p>
          <h1 className="mt-3 text-3xl font-semibold text-forest">Hesabınıza giriş yapın</h1>
          <p className="mt-3 leading-6 text-charcoal/70">İşletme yönetim alanınıza güvenli erişim.</p>
          <form className="mt-8 space-y-5">
            <label className="block text-sm font-medium text-charcoal">
              E-posta
              <input type="email" autoComplete="email" placeholder="ornek@isletme.com" disabled className="mt-2 w-full border border-charcoal/15 bg-ivory/50 px-4 py-3 text-charcoal outline-none placeholder:text-charcoal/40 disabled:cursor-not-allowed" />
            </label>
            <label className="block text-sm font-medium text-charcoal">
              Şifre
              <input type="password" autoComplete="current-password" placeholder="••••••••" disabled className="mt-2 w-full border border-charcoal/15 bg-ivory/50 px-4 py-3 text-charcoal outline-none placeholder:text-charcoal/40 disabled:cursor-not-allowed" />
            </label>
            <button type="button" disabled className="w-full bg-forest px-5 py-3.5 text-sm font-semibold text-white opacity-50">Giriş — Supabase bağlantısı gerekli</button>
          </form>
          <p className="mt-6 border-l-2 border-gold pl-3 text-sm leading-6 text-charcoal/70">Bu ekran şu anda yalnızca arayüz taslağıdır. Gerçek kimlik doğrulama etkin değildir.</p>
          <p className="mt-6 text-sm text-charcoal/70">Hesabınız yok mu? <Link href="/register" className="font-semibold text-forest hover:text-gold">Kayıt oluşturun</Link></p>
        </div>
      </section>
    </main>
  );
}
