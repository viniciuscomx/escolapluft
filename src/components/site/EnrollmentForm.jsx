import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import FormField from './FormField';
import Pill from './Pill';
import { WHATSAPP_URL } from '@/lib/siteAssets';

const EMPTY_FORM = {
  student_name: '',
  birth_date: '',
  stage: 'Berçário',
  guardian_name: '',
  email: '',
  phone: '',
  message: '',
};

const STAGES = ['Berçário', 'Educação Infantil', 'Ainda não sei'];

export default function EnrollmentForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError('');

    try {
      await base44.entities.EnrollmentRequest.create({ ...form, message: form.message.trim() });
      setSent(true);
    } catch {
      setError('Não conseguimos enviar sua solicitação agora. Tente novamente ou fale com a gente pelo WhatsApp.');
    } finally {
      setSaving(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-[22px] border border-[rgba(81,85,121,0.14)] bg-white p-7 shadow-[0_20px_50px_rgba(39,41,67,0.08)] min-[620px]:p-10">
        <span className="mb-3 block text-[28px] text-pluft-red">✳</span>
        <h2 className="m-0 font-display text-[30px] leading-[1.05] text-pluft-blue min-[620px]:text-[36px]">
          Recebemos seu pedido de vaga!
        </h2>
        <p className="mt-4 text-[16px] leading-[1.75] text-[rgba(39,41,67,0.7)]">
          Nossa equipe vai entrar em contato pelo telefone ou e-mail informado para conversar sobre a
          vaga de <strong>{form.student_name}</strong>. Se preferir adiantar, é só chamar no WhatsApp.
        </p>
        <div className="mt-7">
          <Pill href={WHATSAPP_URL} variant="red" size="small" target="_blank" rel="noopener">
            Falar no WhatsApp
          </Pill>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-[22px] border border-[rgba(81,85,121,0.14)] bg-white p-6 shadow-[0_20px_50px_rgba(39,41,67,0.08)] min-[620px]:p-10"
    >
      <div className="grid gap-5 min-[620px]:grid-cols-2 min-[620px]:gap-6">
        <FormField
          label="Nome do aluno(a)"
          name="student_name"
          value={form.student_name}
          onChange={update}
          placeholder="Nome completo da criança"
          required
        />
        <FormField
          label="Data de nascimento"
          name="birth_date"
          type="date"
          value={form.birth_date}
          onChange={update}
          required
        />
        <FormField
          label="Etapa de interesse"
          name="stage"
          value={form.stage}
          onChange={update}
          options={STAGES}
        />
        <FormField
          label="Nome do responsável"
          name="guardian_name"
          value={form.guardian_name}
          onChange={update}
          placeholder="Como podemos te chamar"
          required
        />
        <FormField
          label="E-mail"
          name="email"
          type="email"
          value={form.email}
          onChange={update}
          placeholder="seuemail@exemplo.com"
          required
        />
        <FormField
          label="Telefone / WhatsApp"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={update}
          placeholder="(16) 99999-9999"
          required
        />
      </div>

      <div className="mt-5 min-[620px]:mt-6">
        <FormField
          label="Quer contar um pouco mais? (opcional)"
          name="message"
          type="textarea"
          value={form.message}
          onChange={update}
          placeholder="Dúvidas, período desejado, alguma necessidade específica..."
        />
      </div>

      {error && (
        <p className="mt-6 rounded-[14px] bg-[rgba(232,71,53,0.08)] px-4 py-3 text-[14px] font-bold leading-[1.6] text-pluft-red">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={saving}
        className="mt-7 inline-flex min-h-[48px] items-center justify-center rounded-full bg-pluft-red px-6 font-black text-white shadow-[0_10px_24px_rgba(232,71,53,0.16)] transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none min-[620px]:min-h-[52px] min-[620px]:px-[25px]"
      >
        {saving ? 'Enviando...' : 'Quero solicitar uma vaga'}
      </button>

      <p className="mt-4 text-[13px] leading-[1.6] text-[rgba(39,41,67,0.55)]">
        Usamos seus dados apenas para o contato sobre a matrícula.
      </p>
    </form>
  );
}