"use client";

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import trLocale from "@fullcalendar/core/locales/tr"; // Türkçe locale

export default function Calendar() {
  return (
    <main className="w-full h-full min-h-screen">
      <div className="p-12">
        <h1 className="text-4xl font-bold mb-4">Takvim</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locales={[trLocale]}     // Türkçe'yi ekle
        locale="tr"              // Aktif dili Türkçe yap
        headerToolbar={{
        }}
        events={[
          { title: "Toplantı", date: "2025-09-05" },
          { title: "Etkinlik", date: "2025-09-07" },
          { title: "Etkinlik", date: "2025-09-09" },
        ]}
      />
      </div>
    </main>
  );
}